import { IValidation } from "./IValidation";
import { RegularExpressionValidator } from "src/Validators/RegularExpression";
import { MinLengthValidator } from "src/Validators/MinLengthValidator";
import { IPersonState } from "src/State";

export class PhoneValidation implements IValidation {

  private readonly regexValidator: RegularExpressionValidator = new RegularExpressionValidator(`^(?:\\((?:[0-9]{3})\\)|(?:[0-9]{3}))[-. ]?(?:[0-9]{3})[-. ]?(?:[0-9]{4})$`);
  private readonly minLengthValidator: MinLengthValidator = new MinLengthValidator(1);

  public Validate(state: IPersonState, errors: string[]): void {
    if (!this.minLengthValidator.IsValid(state.PhoneNumber)) {
      errors.push("You must enter a phone number");
    } else if (!this.regexValidator.IsValid(state.PhoneNumber)) {
      errors.push("The phone number format is not valid");
    }
  }
}