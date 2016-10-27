// Arrays are objects

var arr = [
    1, 
    false, 
    {
        name: 'Tony',
        address: '111 Main St.'
    },
    function(name) {
        var greeting = this[4];
        console.log(greeting + name);
    },
    "hello "
];

arr[3](arr[2].name);