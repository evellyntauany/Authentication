import { ValidationEmail } from "../../helpers/validationEmail";

type ValidationErrorProps = {
    errorMessage: string;
    hasChanged: boolean;
    type: 'required' | 'email';
    value: string;
    testId: string;
}


export default function ValidationError(props: ValidationErrorProps) {
    if (!props.hasChanged) {
        return null;
    }

    const error = <div data-testid={props.testId} className='error'>{props.errorMessage}</div>;

    if (props.type === 'required') {
        return (
            props.value ==='' ?
                error
                : null
        )
    }

    return (
        !ValidationEmail(props.value) ?
            error
            : null
    )
}