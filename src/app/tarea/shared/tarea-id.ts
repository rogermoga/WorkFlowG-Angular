import { Tarea } from "./tarea";

export interface TareaId extends Tarea {
    /**
     * We extend the class tarea to add an ID
     */
    id: string;
}