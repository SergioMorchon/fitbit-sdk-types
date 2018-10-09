import {encode, decode} from 'cbor';

encode({potato: '🥔'});

const buffer = new ArrayBuffer(1);
const value = decode(buffer);