function isIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        if ((sMap.has(sChar) && sMap.get(sChar) !== tChar) || 
            (tMap.has(tChar) && tMap.get(tChar) !== sChar)) {
            return false;
        }

        sMap.set(sChar, tChar);
        tMap.set(tChar, sChar);
    }

    return true;
}
