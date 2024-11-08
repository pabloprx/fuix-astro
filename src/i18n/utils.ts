import { languages } from './ui';

export function getStaticPathLocales() {  
  return Object.keys(languages).map((lang) => ({ params:  { lang } }))
}
