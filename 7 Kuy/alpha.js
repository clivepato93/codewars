
name = 'The Window';

let alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
        function test() {
            return this.name;
        };
        return test.bind(alpha)

    }
};


    console.log(alpha.getNameFunc()(), 'My Alpha');
