```mermaid
flowchart TD
    %% Root Node
    A["mkm-cypress"]

    %% Cypress Node and its Subcomponents
    subgraph Cypress["cypress"]
        direction TB
        C1["e2e"]
        subgraph Cypressjoao["Cypressjoao"]
            direction TB
            mkchannels["mkchannels"]
            Mkconfig["Mkconfig"]
            MKMSms["MKMSms"]
            MkWhatsOne["MkWhatsOne"]
        end
        E["downloads"]
        F["fixtures"]
        G["plugins"]
        H["reports"]
        I["screenshots"]
        J["support"]
        K["videos"]
    end

    %% Configuration Files
    subgraph ConfigFiles["Config Files"]
        direction TB
        L["docker-compose.yml"]
        M["Dockerfile"]
    end

    %% Project Files
    subgraph ProjectFiles["Project Files"]
        direction TB
        N["node_modules"]
        O["swagger.yaml"]
        P["package.json"]
        Q["yarn.lock"]
        R["README.md"]
        S["LICENSE"]
        T["server.js"]
        U["linux_amd64.tar.gz"]
    end

    %% Connections between sections
    A --> B["cypress"]
    A --> ConfigFiles
    A --> ProjectFiles

    %% Connections inside Cypress
    B --> E
    B --> F
    B --> G
    B --> H
    B --> I
    B --> J
    B --> K
    B --> C1 --> Cypressjoao

    %% Files inside Cypressjoao
    Cypressjoao --> mkchannels
    Cypressjoao --> Mkconfig
    Cypressjoao --> MKMSms
    Cypressjoao --> MkWhatsOne
