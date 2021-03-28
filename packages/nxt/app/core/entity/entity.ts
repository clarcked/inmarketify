export default class Entity {
    private _id;
    private _createdAt: string
    private _modifiedAt: string;
    private _note: string;
    private _status: string;

    get id() {
        return this._id;
    }

    get createdAt(): string {
        return this._createdAt;
    }

    get modifiedAt(): string {
        return this._modifiedAt;
    }

    get note(): string {
        return this._note;
    }

    get status(): string {
        return this._status;
    }


    set id(value) {
        this._id = value;
    }

    set createdAt(value: string) {
        this._createdAt = value;
    }

    set modifiedAt(value: string) {
        this._modifiedAt = value;
    }

    set note(value: string) {
        this._note = value;
    }

    set status(value: string) {
        this._status = value;
    }
}