interface Questionnaire {
    question: string;
    answer: string;
}
export declare class CreateSignUpDto {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    questions: Questionnaire[];
}
export {};
