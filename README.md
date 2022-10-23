
## Objetivo 

O objetivo desse projeto foi clusterizar uma aplicação criada e que fique exibindo no log do pod a cada vinte segundos um valor de uma secret de Kubernetes.

### Aplicação

Foi criado um webserver http usando NodeJS na qual printa no log a cada 20 segundos o valor da secret, e requisita 2 envs para funcionar, uma delas é a env que será printada(``DEVOPS``) e outra é env com o valor da porta na qual o webserver irá rodar(``APP_PORT``).

Run local:

```
node /src/server.js
```

Running using docker:
```
docker run -dit -e DEVOPS=DEVOPS -e APP_PORT=8080 -p8080:8080 josecyber/chapter-sysadmin
```
* Realizado push da imagem criada para o meu [dockerhub](https://hub.docker.com/repository/docker/josecyber/chapter-sysadmin)

### Pipeline cloudbuild

O serviço de pipeline escolhido foi o cloudbuild do GCP(Google Cloud Plataform), onde eu consigo integrar com o serviço do Secret Manager e com o GKE, eu criei 6 steps que são eles:
  - <strong>Enviroment:</strong> ficará responsavel por levantar as variaveis necessarias para o build
  - <strong>Git Clone:</strong> Embora não seja necessario esse step eu quis colocar para demonstar como consumir tokens e secrets do secret manager no script de pipeline.
  - <strong>Docker Build:</strong> Esse step ficará responsavel por buildar a partir do codigo clonado.
  - <strong>Docker vulnarability:</strong> Que realizará uma analise de vulnerabilidade em cima da imagem criada no step anterior.
  - <strong>Docker Push:</strong> Realizará o push da imagem para meu dockerhub.
  - <strong>Kube kill:</strong> deletará os pods no cluster para que subam com a nova imagem buildada.

No script de pipeline utiliza uma imagem docker personalizada para cada step, imagem essa que eu buildei a partir do dockerfile na qual consta na pasta [cloudbuild-image](./cloudbuild-image/dockerfile).
### Kubernetes

A applicação é capaz de funcionar tanto em um cluster kubernetes local usando Minikube, K3D ou similar, ou até mesmo em um cluster kubernetes em um ambiente de cloud qualquer.

O projeto contem os manifestos do kubernetes incluindo os tipos: deployment, service, secret, configmap e ingress. O deployment deve rodar a imagem docker construida pelo pipline do cloudbuild e o step do pipeline ``kube kill`` vai ficar responsavel por matar os pods para que eles sejam atualizados a cada commit.

Applying kubernetes files:

```
 kubectl apply -f /K8S/ .
```