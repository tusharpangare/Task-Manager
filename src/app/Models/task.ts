export interface Task {
    id: number;
    title: string;
    description?: string;
    priority? : 'High' | 'Medium' | 'Low';
    status?: "Incomplete" | "Complete";
    dueDate?: Date;
}
