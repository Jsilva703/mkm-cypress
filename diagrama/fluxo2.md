```mermaid
flowchart TD
    A["mkm-cypress"]
    
    %% Subgroup Cypress
    subgraph Cypress["cypress"]
        direction TB
        E["downloads"]
        F["fixtures"]
        G["plugins"]
        H["reports"]
        I["screenshots"]
        J["support"]
        K["videos"]
        C["e2e"]
        D["Cypressjoao"]
            subgraph Cypressjoao["Módulos"]
                mkchannels["mkchannels"]
                Mkconfig["Mkconfig"]
                MKMSms["MKMSms"]
                MkWhatsOne["MkWhatsOne"]
            end
    end

    %% Subgroup Config Files
    subgraph ConfigFiles["Config Files"]
        direction TB
        L["docker-compose.yml"]
        M["Dockerfile"]
    end

    %% Subgroup Project Files
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
    
    %% Connections
    A --> Cypress
    A --> ConfigFiles
    A --> ProjectFiles
    
    Cypress --> E
    Cypress --> F
    Cypress --> G
    Cypress --> H
    Cypress --> I
    Cypress --> J
    Cypress --> K
    Cypress --> C
    C --> D
    D --> mkchannels
    D --> Mkconfig
    D --> MKMSms
    D --> MkWhatsOne

%% Node styles
    style A fill:#f3f4f6,stroke:#333,stroke-width:2px
    style E,F,G,H,I,J,K,C,D fill:#ffffff,stroke:#3182bd,stroke-width:2px
    style L,M fill:#ffffff,stroke:#3182bd,stroke-width:2px
    style N,O,P,Q,R,S,T,U fill:#ffffff,stroke:#3182bd,stroke-width:2px
    style Cypress fill:#e3f7ff,stroke:#333,stroke-width:2px
    style ConfigFiles fill:#e3ffe3,stroke:#333,stroke-width:2px
    style ProjectFiles fill:#fff7e3,stroke:#333,stroke-width:2px
    style Cypressjoao fill:#f3f7ff,stroke:#333,stroke-width:2px
