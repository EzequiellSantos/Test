# Passo a Passo - Selo 4 ( ML and IA )

Tarefa 1: Abra o Cloud Shell e cole o seguinte comando, subtstituindo o DATASET_NAME e BUCKET_NAME pelo o que seu laboratório fornece:

```jsx
bq mk DATASET_NAME

gsutil mb gs://BUCKET-NAME

gsutil cp gs://cloud-training/gsp323/lab.csv  .
  
gsutil cp gs://cloud-training/gsp323/lab.schema .
 
cat lab.schema
```

Restante da tarefa é manual na seção 
```jsx 
BigQuery
``` 

…Criando a Tabela: Cole esse comando na seção texto do Schema 

```jsx
[
        {"type":"STRING","name":"guid"},
        {"type":"BOOLEAN","name":"isActive"},
        {"type":"STRING","name":"firstname"},
        {"type":"STRING","name":"surname"},
        {"type":"STRING","name":"company"},
        {"type":"STRING","name":"email"},
        {"type":"STRING","name":"phone"},
        {"type":"STRING","name":"address"},
        {"type":"STRING","name":"about"},
        {"type":"TIMESTAMP","name":"registered"},
        {"type":"FLOAT","name":"latitude"},
        {"type":"FLOAT","name":"longitude"}
]
```

Logo Após é a tarefa No Menu
```jsx
Dataflow
```

Logo Após é a tarefa No Menu
```jsx
Dataproc
```
para criar um cluster

Depois vá em 
```jxs
API & Services > Credentiais > Chave de Api > Criar Chave
```

Copie a Chave


Executando a Tarefa da IA texto:

```jsx
export API_KEY={chave api}

export TASK_3_BUCKET_NAME={tarefa_3}

export TASK_4_BUCKET_NAME={tarefa_4}

gcloud iam service-accounts create quicklab \
  --display-name "my natural language service account"

gcloud iam service-accounts keys create ~/key.json \
  --iam-account quicklab@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com

export GOOGLE_APPLICATION_CREDENTIALS="/home/$USER/key.json"

gcloud auth activate-service-account quicklab@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com --key-file=$GOOGLE_APPLICATION_CREDENTIALS

gcloud ml language analyze-entities --content="Old Norse texts portray Odin as one-eyed and long-bearded, frequently wielding a spear named Gungnir and wearing a cloak and a broad hat." > result.json

gcloud auth login --no-launch-browser
```

```jsx
# TASK 4 BUCKET_NAME

gsutil cp result.json $TASK_4_BUCKET_NAME

cat > request.json <<EOF 
{
  "config": {
      "encoding":"FLAC",
      "languageCode": "en-US"
  },
  "audio": {
      "uri":"gs://cloud-training/gsp323/task3.flac"
  }
}
EOF

curl -s -X POST -H "Content-Type: application/json" --data-binary @request.json \
"https://speech.googleapis.com/v1/speech:recognize?key=${API_KEY}" > result.json

gsutil cp result.json $TASK_3_BUCKET_NAME

gcloud iam service-accounts create quickstart

gcloud iam service-accounts keys create key.json --iam-account quickstart@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com

gcloud auth activate-service-account --key-file key.json

export ACCESS_TOKEN=$(gcloud auth print-access-token)

cat > request.json <<EOF 
{
   "inputUri":"gs://spls/gsp154/video/train.mp4",
   "features": [
       "TEXT_DETECTION"
   ]
}
EOF

curl -s -H 'Content-Type: application/json' \
    -H "Authorization: Bearer $ACCESS_TOKEN" \
    'https://videointelligence.googleapis.com/v1/videos:annotate' \
    -d @request.json

curl -s -H 'Content-Type: application/json' -H "Authorization: Bearer $ACCESS_TOKEN" 'https://videointelligence.googleapis.com/v1/operations/OPERATION_FROM_PREVIOUS_REQUEST' > result1.json
```
Logo após, em 
```jxs
Dataproc
```
Vai em VM instances dentro do cluster criado e entra no 
```jxs
SSH
```
e digita o codigo dado pelo laboratório
.
.
Logo em seguida na mesma seção de menu, clique em 
```jxs
Jobs
```
E submeta um Job patra finalizar a tarefa com os dados cedidos pelo laboratório
