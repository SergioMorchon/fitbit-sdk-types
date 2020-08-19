type PickKeyByExtendsValue<T, ValueType> = {
	[Key in keyof T]-?: ValueType extends T[Key] ? Key : never;
}[keyof T];
