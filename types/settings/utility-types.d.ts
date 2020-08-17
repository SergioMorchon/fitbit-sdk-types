type PickByExtendsValue<T, ValueType> = Pick<T, {
    [Key in keyof T]-?: ValueType extends T[Key] ? Key : never;
}[keyof T]>;
