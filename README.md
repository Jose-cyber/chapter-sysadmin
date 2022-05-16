
## Objetivo 
Clusterizar uma aplicação criada pelo candidato que fique exibindo no log do pod a cada vinte segundos um valor de uma secret de Kubernetes.

### Passos

1. Criar uma applicação, na linguagem de programação que o canditado tiver mais familiaridade que fique exibindo uma variavel de ambiente do sistema operacional de 20 em 20 segundos, o nome da variavel deve ser "DEVOPS" e o valor desta variavel deve ser "true100%". 

2. Criar um container usando docker ou similar com o codigo. Opcional: fazer o upload da imagem contruida para um container registry de preferencia.

3. Opcional: Instanciar um cluster kubernetes local usando Minikube, K3D ou similar na maquina do candidato para criação e testes dos manifestos a serem criados.

4. Criar manifestos kubernetes incluindo os tipos deployment, service, secret. O deployment deve rodar a imagem docker construida pelo candidato e na secret deve ser adicionado a variavel esperada pela aplicação e passada para o container como variavel de ambiente.

Bonus: Fazer um script bash que varre os namespaces e pega a secret de cada deployment para comparar se o valor da secret do deployment está sendo exibida no log do container que está rodando a aplicação. Se o valor da secret estiver sendo exibida retornar uma mensagem informando que o container tem um problema de segurança.

<hr>

## Aplicação

* Foi criado um webserver http usando NodeJS na qual printa no log a cada 20 segundos o valor da secret


## Docker image

* foi criada uma imagem docker de um webserver usando nodejs na qual consome a variavel **DEVSECOPS**
* Realizado push para o meu [dockerhub](https://hub.docker.com/repository/docker/josecyber/2rpteste)

## Kubernetes

* Definido um namespace chamado **2rpnet**
* criado um arquivo de deployment
* criado um arquivo de secret
* criado um arquivo de service do tipo clusterIP


## Secret checks

**Required comands:**

```chmod +x inspect.sh```

```./inpect.sh```

<img src="img/secret.PNG">