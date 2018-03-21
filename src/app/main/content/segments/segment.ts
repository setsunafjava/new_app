export class Segment {
  app: String;
  description: String;
  expression: String;
  id: String;
  json: String;
  name: String;
  order: Number;
  purpose: String;
  type: Number;
  updateDate: Date;
  user: String;

  constructor (obj?) {
    obj = obj || {};

    this.app = obj.app || '';
    this.description = obj.description || '';
    this.expression = obj.expression || '';
    this.id = obj.id || '';
    this.json = obj.json || '';
    this.name = obj.name || '';
    this.order = obj.order || null;
    this.purpose = obj.purpose || '';
    this.type = obj.type || null;
    this.updateDate = obj.updateDate || null;
    this.user = obj.user || '';
  }
}
