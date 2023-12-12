const skills = [
    {id: 123456, skill: 'HTML', level: '4/5'},
    {id: 123457, skill: 'CSS', level: '3/5'},
    {id: 123458, skill: 'JavaScript', level: '2/5'},
]

module.exports = {
    getAll,
    getOne,
    create,
}

function create(skill){
    skill.id = Date.now() % 1000000;
    skill.level = '3/5'
    skills.push(skill)
}
function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id)
}

function getAll(){
    return skills;
}