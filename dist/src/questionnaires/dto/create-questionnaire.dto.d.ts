export declare class CreateQuestionnaireDto {
    gender: string;
    ageRange: string;
    district: string;
    educationLevel: string;
    breastCondition: string;
    knowSomeoneWithBreastCondition: string;
    yourMotivation: string;
    signUp: {
        connect: {
            id: number;
        };
    };
}
