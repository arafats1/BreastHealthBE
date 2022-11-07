export declare class CreateSignUpDto {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    questions: {
        gender: string;
        ageRange: string;
        district: string;
        educationLevel: string;
        breastCondition: string;
        knowSomeoneWithBreastCondition: string;
        yourMotivation: string;
    };
}
