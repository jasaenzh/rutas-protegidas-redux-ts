// Persistir la informacion en la Base de Datos
export const persistLocalStorage = <T,>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify({ ...value }))
}

// Limpiar la informacion en la Base de Datos
export const clearLocalStorage = (key: string) => {
    localStorage.removeItem(key);
};