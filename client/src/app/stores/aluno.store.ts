
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Aluno } from "../models/aluno";

export interface State {
    aluno: Aluno[];    
}
const state: State = {
    aluno: []    
}
export class StoreAluno {
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
    public getaluno(): Observable<Aluno[]>{       
        return this.store.pipe(map(store => store.aluno))
    }
}