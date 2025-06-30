import { useState, useEffect } from "react";

const useLocalStorage = (storageKey, initialValue) => {
    // Verifica che la chiave sia una stringa non vuota
    if (typeof storageKey !== 'string' || storageKey.trim() === '') {
        throw new Error('La chiave di localStorage deve essere una stringa non vuota');
    }

    const [value, setValue] = useState(() => {
        try {
            const storedValue = localStorage.getItem(storageKey);
            if (storedValue === null || storedValue === undefined) {
                // Se non esiste, salva il valore iniziale nel localStorage
                localStorage.setItem(storageKey, JSON.stringify(initialValue));
                return initialValue;
            }
            const parsedValue = JSON.parse(storedValue);
            // Verifica che il valore parsato sia valido
            return parsedValue !== null && parsedValue !== undefined ? parsedValue : initialValue;
        } catch (error) {
            console.error('Errore nel recupero dei dati da localStorage:', error);
            // In caso di errore, salva il valore iniziale
            localStorage.setItem(storageKey, JSON.stringify(initialValue));
            return initialValue;
        }
    });

    const updateStorage = (newValue) => {
        try {
            if (typeof newValue === 'function') {
                setValue(prevValue => {
                    // Assicurati che prevValue sia sempre valido
                    const safeValue = prevValue || initialValue;
                    const valueToStore = newValue(safeValue);
                    localStorage.setItem(storageKey, JSON.stringify(valueToStore));
                    return valueToStore;
                });
            } else {
                setValue(newValue);
                localStorage.setItem(storageKey, JSON.stringify(newValue));
            }
        } catch (error) {
            console.error('Errore nel salvataggio su localStorage:', error);
        }
    };

    // Sincronizzazione con localStorage da altre schede/finestre
    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === storageKey && event.newValue !== null) {
                try {
                    const parsedValue = JSON.parse(event.newValue);
                    setValue(parsedValue !== null && parsedValue !== undefined ? parsedValue : initialValue);
                } catch (error) {
                    console.error('Errore nella sincronizzazione del localStorage:', error);
                    setValue(initialValue);
                }
            }
        };

        // Ascolta i cambiamenti da altre schede/finestre
        window.addEventListener('storage', handleStorageChange);

        // Cleanup
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [storageKey, initialValue]);

    return [value, updateStorage];
};

export default useLocalStorage;