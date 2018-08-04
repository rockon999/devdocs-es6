import Model from '../models/model';
import {
  App
} from '../app/app';

export default class Collection {
  constructor(objects) {
    if (objects == null) {
      objects = [];
    }
    this.reset(objects);
  }

  model() {
    return null;
  }

  reset(objects) {
    if (objects == null) {
      objects = [];
    }
    this.models = [];
    for (let object of objects) {
      this.add(object);
    }
  }

  add(object) {
    if (object instanceof Model) {
      this.models.push(object);
    } else if (object instanceof Array) {
      for (let obj of object) {
        this.add(obj);
      }
    } else if (object instanceof Collection) {
      this.models.push(...(object.all() || []));
    } else {
      this.models.push(new(this.model())(object));
    }
  }

  remove(model) {
    this.models.splice(this.models.indexOf(model), 1);
  }

  size() {
    return this.models.length;
  }

  isEmpty() {
    return this.models.length === 0;
  }

  each(fn) {
    for (let model of this.models) {
      fn(model);
    }
  }

  all() {
    return this.models;
  }

  contains(model) {
    return this.models.indexOf(model) >= 0;
  }

  findBy(attr, value) {
    for (let model of this.models) {
      if (model[attr] === value) {
        return model;
      }
    }
  }

  findAllBy(attr, value) {
    return this.models.filter((model) => model[attr] === value);
  }

  countAllBy(attr, value) {
    let i = 0;
    for (let model of this.models) {
      if (model[attr] === value) {
        i += 1;
      }
    }
    return i;
  }
};
