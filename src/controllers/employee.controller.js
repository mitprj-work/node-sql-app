
exports.findAll = function (req, res) {
    const response = [
        { name: 'Mitesh', tech: 'react' },
        { name: 'Rajesh', tech: 'Node' },
        { name: 'Mahesj', tech: 'react' },
        { name: 'Rahul', tech: 'react' },
        { name: 'Jigar', tech: 'Node' },
        { name: 'Jitesh', tech: 'react' },
    ]
    res.send(response)
}