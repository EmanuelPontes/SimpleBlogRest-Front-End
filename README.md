SimpleBlogRest

-Back-end em php, database com MySql
-Front-end em angular framework

O front-end:
    -Area do administrador:
        - registrar um administrador
        - permitir criar e editar textos
        - publicar artigos

    - Area do usuario:
        - visualizar lista artigos publicados
        - visualizar artigo especifico 
O back-end:
    -Estrutura banco de dados:
        - Armazena caminho do arquivo onde os artigos estão salvos
        - Relaciona o autor aos artigos publicados
        - Além do texto os artigos devem conter a data de publicação
        - Autor terá autorização de administrador, registro com:
            -Senha
            -Nome
            -Email
    - Authenticação e autorização de acordo com a categoria(Usuário ou Admin) 
