```mermaid
flowchart TD
    %% Root Node
    A["mkm-cypress"]:::root

    %% Cypress Node and its Subcomponents
    subgraph Cypress["cypress"]
        direction TB
        decision1{"e2e"}:::decision
        subgraph Cypressjoao["Cypressjoao"]
            direction TB
            mkchannels["mkchannels"]:::file
            Mkconfig["Mkconfig"]:::file
            MKMSms["MKMSms"]:::file
            MkWhatsOne["MkWhatsOne"]:::file
        end
        downloads["downloads"]:::folder
        fixtures["fixtures"]:::folder
        plugins["plugins"]:::folder
        reports["reports"]:::folder
        screenshots["screenshots"]:::folder
        support["support"]:::folder
        videos["videos"]:::folder
    end

    %% Configuration Files
    subgraph ConfigFiles["Config Files"]
        direction TB
        dockerCompose["docker-compose.yml"]:::file
        dockerfile["Dockerfile"]:::file
    end

    %% Project Files
    subgraph ProjectFiles["Project Files"]
        direction TB
        nodeModules["node_modules"]:::file
        swagger["swagger.yaml"]:::file
        packageJson["package.json"]:::file
        yarnLock["yarn.lock"]:::file
        readme["README.md"]:::file
        license["LICENSE"]:::file
        serverJs["server.js"]:::file
        archive["linux_amd64.tar.gz"]:::file
    end

    %% Connections between sections
    A -->|Contains main structure and dependencies| B["cypress"]
    A -->|Contains configuration files| ConfigFiles
    A -->|Includes project files| ProjectFiles

    %% Connections inside Cypress
    B -->|Contains Downloads| downloads
    B -->|Contains Fixtures| fixtures
    B -->|Contains Plugins| plugins
    B -->|Generates Reports| reports
    B -->|Contains Screenshots| screenshots
    B -->|Contains Support files| support
    B -->|Contains Videos| videos
    B -->|Executes e2e Tests| decision1 -->|Test Scripts| Cypressjoao

    %% Files inside Cypressjoao
    Cypressjoao --> mkchannels
    Cypressjoao --> Mkconfig
    Cypressjoao --> MKMSms
    Cypressjoao --> MkWhatsOne

    %% Node Styles
    classDef root fill:#FFA500,stroke:#333,stroke-width:2px
    classDef folder fill:#FFFFFF,stroke:#FFA500,stroke-width:2px
    classDef config fill:#FFA500,stroke:#333,stroke-width:2px
    classDef project fill:#FFFFFF,stroke:#FFA500,stroke-width:2px
    classDef file fill:#FFFFFF,stroke:#FFA500,stroke-width:2px
    classDef decision fill:#FFA500,stroke:#FF4500,stroke-width:2px

    %% Apply Styles
    class A,B,downloads,fixtures,plugins,reports,screenshots,support,videos,decision1 root
    class Cypressjoao folder
    class dockerCompose,dockerfile config
    class nodeModules,swagger,packageJson,yarnLock,readme,license,serverJs,archive project
    class mkchannels,Mkconfig,MKMSms,MkWhatsOne file
