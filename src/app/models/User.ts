export interface User {
    firstName: string; 
    lastName: string;
    age?: number; // Making this field optional
    address?: {
        'street'?: string,
        'city'?: string,
        'country'?: string
    };
}
