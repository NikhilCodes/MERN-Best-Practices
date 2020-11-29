import ValidationException from './validation.exception';

class PropertyRequiredException extends ValidationException {
  property: string;

  constructor(property: string) {
    super(`${property.toUpperCase()} is required!`);
    this.property = property;
  }
}

export default PropertyRequiredException;
