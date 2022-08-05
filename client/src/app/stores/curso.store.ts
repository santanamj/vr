
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Curso } from "../models/curso";

export interface State {
    cursos: Curso[];    
}
const state: State = {
    cursos: []    
}
export class StoreCurso {
    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable();

    get value(){
       
        return this.subject.value
    }
    set(name: string, state: any) {       
        this.subject.next({
            ...this.value, [name]: state
        })
    }
    public getcurso(): Observable<Curso[]>{       
        return this.store.pipe(map(store => store.cursos))
    }
}