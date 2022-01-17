# Helm 



## Init Template

```bash
> cd helm

> helm create apptemplate
```

### Get AKS DNS
```bash
az aks show -g rg-tutorial-lab-dev -n aks-tutorial-az-asse-dev-001 -o tsv --query addonProfiles.httpApplicationRouting.config.HTTPApplicationRoutingZoneName
```

## Template Configuraiton via --set

- ``appname``=db
- ``image.name``=mongo
- ``image.tag``=latest 
- ``envVar.name``=MONGO_INITDB_ROOT_USERNAME 
- ``envVar.value``=root 
- ``envVar.name2``=MONGO_INITDB_ROOT_PASSWORD 
- ``envVar.value2``=password 
- ``service.type``=LoadBalancer
- ``service.port``=27017 
- ``ingress.enabled``=false



## Run Deploy Helm

### STEP 1 DEPLOY MONGODB

```bash
helm upgrade --install --create-namespace --atomic --wait --namespace prd db . --set appname=db --set image.name=mongo --set image.tag=latest --set envVar.name=MONGO_INITDB_ROOT_USERNAME --set envVar.value=root --set envVar.name2=MONGO_INITDB_ROOT_PASSWORD --set envVar.value2=password --set service.port=27017 --set ingress.enabled=false
```

### STEP 2 DEPLOY BACKEND

```bash
helm upgrade --install --create-namespace --atomic --wait --namespace prd tutorial-backend . --set appname=tutorial-backend --set image.name=acrtutorialazassedev001.azurecr.io/tutorial-backend --set image.tag=0.0.1-SNAPSHOT --set envVar.name=MONGODB_CONNECTION_STRING --set envVar.value="mongodb://root:password@db-service:27017" --set service.type=LoadBalancer --set service.port=8089 --set ingress.enabled=false --set buildNumber=1
```

### STEP 3 DEPLOY FRONTEND


```bash
# GET IP BACKEND 
> kubectl get svc -n <namespace>

> helm upgrade --install --create-namespace --atomic --wait --namespace prd tutorial-frontend . --set appname=tutorial-frontend --set image.name=acrtutorialazassedev001.azurecr.io/tutorial-frontend --set image.tag=0.0.1-SNAPSHOT --set envVar.name=VUE_APP_ENPOINT_API_BACKEND --set envVar.value=http://20.43.159.232:8089/api/ --set service.port=80 --set ingress.enabled=true --set ingress.dns=bde4d46fc0404f51bd17.southeastasia.aksapp.io --set buildNumber=1
```

Output YAML
```bash
helm template . -set ... --output-dir output
```