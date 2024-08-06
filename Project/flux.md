```mermaid
flowchart TD
    mkm-cypress(("mkm-cypress")) --> cypress{"cypress"} & API["API"] & cypressconfig(["cypress.config.js"]) & Docker(["Docker"]) & packagejson(["package.json"]) & swaggeryaml(["swagger.yaml"]) & yarnlock(["yarn.lock"])
    API --> server.js(["server.js"])
    Docker --> dockercompose(["docker compose"]) & DockerFile(["Docker File"])
    cypress --> downloads(["downloads"]) & e2e(["e2e"]) & fixtures(["fixtures"]) & plugins(["plugins"]) & reports(["reports"]) & screenshots(["screenshots"]) & support(["support"]) & videos(["videos"])
    e2e --> Cypressjoao(["Cypressjoao"])
    Cypressjoao --> mkchannels("mkchannels") & Mkconfig("Mkconfig") & MKMSms("MKMSms") & MkWhatsOne("MkWhatsOne")
    support --> channels["channels.js"] & one["one.js"] & sms["sms.js"] & config["config.js"]
    style mkm-cypress fill:#000000,stroke:#FFFFFF
    style cypress stroke:#2962FF
