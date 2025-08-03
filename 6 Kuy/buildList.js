
function Node(data,next=null) {
    this.data = data === undefined ? null : data;
    this.next = next;
}

function buildList(arr){
    if(!arr.length){
        return null
    }
    return new Node(arr[0],buildList(arr.slice(1)))
}

module.exports = buildList;