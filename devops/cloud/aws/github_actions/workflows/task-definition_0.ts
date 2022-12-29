module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "severity-1876",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-meanticketapp49-1876-severity:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8012",
                    "protocol": "tcp",
                    "hostPort": "8012"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@meanticketapp49.local:27017/meanticketapp49_1876?authSource=admin"},{"name":"MONGO_DOMAIN","value":"meanticketapp49.local"},{"name":"CAMUNDAPOD_URL","value":"http://meanticketapp49.local:8080"},{"name":"SECURITYURL","value":"http://meanticketapp49.local:8003"},{"name":"AUTHPROXYURL","value":"http://meanticketapp49.local:8001"},{"name":"ADMINURL","value":"http://meanticketapp49.local:8004"},{"name":"CAMUNDAURL","value":"http://meanticketapp49.local:8002"},{"name":"GCAMURL","value":"http://meanticketapp49.local:8007"},{"name":"APIGATEWAY","value":"http://meanticketapp49.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "meanticketapp49"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/meanticketapp49",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "servicetypes-1876",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-meanticketapp49-1876-servicetypes:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8013",
                    "protocol": "tcp",
                    "hostPort": "8013"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@meanticketapp49.local:27017/meanticketapp49_1876?authSource=admin"},{"name":"MONGO_DOMAIN","value":"meanticketapp49.local"},{"name":"CAMUNDAPOD_URL","value":"http://meanticketapp49.local:8080"},{"name":"SECURITYURL","value":"http://meanticketapp49.local:8003"},{"name":"AUTHPROXYURL","value":"http://meanticketapp49.local:8001"},{"name":"ADMINURL","value":"http://meanticketapp49.local:8004"},{"name":"CAMUNDAURL","value":"http://meanticketapp49.local:8002"},{"name":"GCAMURL","value":"http://meanticketapp49.local:8007"},{"name":"APIGATEWAY","value":"http://meanticketapp49.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "meanticketapp49"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/meanticketapp49",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "ticketapp-1876",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-meanticketapp49-1876-ticketapp:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8014",
                    "protocol": "tcp",
                    "hostPort": "8014"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@meanticketapp49.local:27017/meanticketapp49_1876?authSource=admin"},{"name":"MONGO_DOMAIN","value":"meanticketapp49.local"},{"name":"CAMUNDAPOD_URL","value":"http://meanticketapp49.local:8080"},{"name":"SECURITYURL","value":"http://meanticketapp49.local:8003"},{"name":"AUTHPROXYURL","value":"http://meanticketapp49.local:8001"},{"name":"ADMINURL","value":"http://meanticketapp49.local:8004"},{"name":"CAMUNDAURL","value":"http://meanticketapp49.local:8002"},{"name":"GCAMURL","value":"http://meanticketapp49.local:8007"},{"name":"APIGATEWAY","value":"http://meanticketapp49.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "meanticketapp49"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/meanticketapp49",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "meanticketapp49",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "meanticketapp490",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
