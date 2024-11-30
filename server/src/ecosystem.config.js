module.exports = {
    apps: [
        {
            name: "project-managememt",
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV: "development"
            }
        }
    ]
}