export interface Item {
    type: string,
    name: string,
    required?: boolean,
    complementary?: string,
    default?: string,
    multiple?: boolean
}