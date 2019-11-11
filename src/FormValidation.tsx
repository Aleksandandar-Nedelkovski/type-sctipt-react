import { StringOrNull } from "./Types";
import { IPersonState } from "./State";

interface IValidator<T>  {
  IsValid(input: T) : boolean;
}

export class MinLengthValidator implements IValidator<StringOrNull> {
  private minLength: number;
  constructor(minLength: number) {
    this.minLength = minLength
  }
  public IsValid(input: StringOrNull) : boolean {
    if(!input) {
      return false;
    }
    return input.length >= this.minLength;
  }
}

export class RegularExpressionValidator implements IValidator<StringOrNull> {
  private regex: RegExp;
  constructor(expression: string) {
    this.regex = new RegExp(expression);
  }
  public IsValid(input: StringOrNull) : boolean {
    if (!input) {
      return false;
    }
    return this.regex.test(input);
  }
}

export interface IValidation {
  Validate(state: IPersonState, errors: string[]) : void;
}