import { query, orderBy, addDoc, getDocs, deleteDoc, doc, updateDoc, onSnapshot, getDoc, } from "firebase/firestore";
import { sessionCollectionRef } from "../firebase/providers";
import { ISession } from "../interfaces/sesions.interface";

export class SessionService {
    constructor(
        private sessionCollection = sessionCollectionRef,
    ) { }

    async getMenus() {
        try {
            const queryData = query<Omit<ISession, 'id'>>(this.sessionCollection, orderBy("order", "asc"));

            const querySnapshot = await getDocs<Omit<ISession, 'id'>>(queryData);
            const modules: ISession[] = []
            querySnapshot.forEach((doc) => {
                const data: Omit<ISession, 'id'> = doc.data();
                modules.push({ id: doc.id, ...data })
            });

            return modules
        } catch (error) {
            console.log(error)
        }
    }

    async getModule(menuId: string) {
        try {
            const moduleRef = doc(this.sessionCollection, menuId);

            const querySnapshot = await getDoc<Omit<ISession, 'id'>>(moduleRef);

            return { id: querySnapshot.id, ...querySnapshot.data() } as ISession
        } catch (error) {
            console.log(error)
        }
    }

    async createMenu(newMenu: Omit<ISession, 'id'>) {
        try {
            const querySnapshot = await addDoc(this.sessionCollection, newMenu);
            const newModuleId = querySnapshot.id;
            return newModuleId
        } catch (error) {
            console.error("Error al crear el menú: ", error);
        }
    }

    async deleteMenu(idMenu: string) {
        //todo:terminar el return 
        try {
            const moduleRef = doc(this.sessionCollection, idMenu);
            await deleteDoc(moduleRef);
        } catch (error) {
            console.error("Error al eliminar el menú: ", error);
        }
    }

    async updateMenu(idMenu: string, { id, ...newMenu }: ISession) {
        try {
            const moduleRef = doc(this.sessionCollection, idMenu);
            await updateDoc(moduleRef, newMenu);
            return { ok: true }
        } catch (error) {
            return { ok: false }
            console.error("Error al actualizar el menú: ", error);
        }
    }

    listeningModules(onSet: (modules: ISession[]) => void) {
        const queryData = query<Omit<ISession, 'id'>>(this.sessionCollection, orderBy("order", "asc"));
        return onSnapshot(queryData, (querySnapshot) => {
            if (!querySnapshot.empty) {
                const modules: ISession[] = []
                querySnapshot.forEach((doc) => modules.push({ id: doc.id, ...doc.data() }));
                onSet(modules)
            } else {
                onSet([])
            }
        });
    }

    listeningSession(sessionId: string, onSet: (session: ISession) => void) {
        const moduleRef = doc(this.sessionCollection, sessionId);
        return onSnapshot(moduleRef, (doc) => {
            const data = doc.data()
            onSet({ id: doc.id, ...data } as ISession)
        });
    }


}

export const sessionService = new SessionService()