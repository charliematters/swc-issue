import { pick } from "lodash";
import { makeObservable, observable } from "mobx";

type DomainObjectFields = Pick<DomainObject, "foo" | "bar">;

export default class DomainObject {
  @observable foo: string | null = null;
  @observable bar: string | null = null;
  constructor(initialData: Partial<DomainObjectFields> = {}) {
    Object.assign(this, pick(initialData, Object.keys(this)));
    makeObservable(this);
  }
}
