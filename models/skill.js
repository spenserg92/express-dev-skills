const skills = [
    {id: 123456, skill: 'HTML', level: '4/5'},
    {id: 123457, skill: 'CSS', level: '3/5'},
    {id: 123458, skill: 'JavaScript', level: '2/5'},
]

module.exports = {
    getAll,
    getOne
}

function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id)
}

function getAll(){
    return skills;
}