    function simplify(path) {
        const stack = [];
        const parts = path.split('/');

        for (const part of parts) {
            if(part === '' || part === '.'){
                continue;
            } else if (part === '..' ){
                stack.pop();
            } else {
                stack.push(part);
            }
        }
        return '/' + stack.join('/');
    }