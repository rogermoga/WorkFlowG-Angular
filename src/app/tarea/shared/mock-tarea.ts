//mock-tarea.ts


import { TareaId } from "./tarea-id";
/**
 * This is a mock we used to call the tareas locally. On the final version it is not used anymore
 */
export const TAREAS: TareaId[] = [
    { id: "1", codigo: "TAR1", descripcion: "Creación componente tarea-list", aplicacion: "WorkFlowG", 
        tipo: "Feature", estado: "DES", fechaAlta: "2018/05/10", usuario: "Rul", 
        despliegue: "1.0" },
    { id: "2", codigo: "TAR2", descripcion: "Creación componente tarea-item", aplicacion: "WorkFlowG", 
        tipo: "Feature", estado: "DES", fechaAlta: "2018/05/10", usuario: "Rul", 
        despliegue: "1.0" }
];