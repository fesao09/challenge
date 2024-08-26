# challenge
Meu primeiro Challenge da Alura

Decodificador de Texto

Este é um projeto de um decodificador de texto simples, que permite criptografar e descriptografar mensagens. A interface é responsiva e possui opções para resetar e copiar o texto resultante.

Descrição

O projeto é um aplicativo web que permite ao usuário criptografar e descriptografar textos. Ele inclui um campo de entrada para o texto, botões para as ações de criptografar, descriptografar e resetar, e uma seção para exibir o resultado da criptografia/descriptografia. A aplicação é responsiva e foi desenvolvida com HTML, CSS e JavaScript.

Funcionalidades

Criptografar: Criptografa o texto inserido usando um método de substituição de caracteres.
Descriptografar: Descriptografa o texto criptografado de volta ao texto original.
Resetar: Limpa o campo de texto e o resultado exibido.
Copiar: Copia o texto criptografado/descriptografado para a área de transferência.

Instalação

Clone o repositório:

bash
Copy code
git clone (https://github.com/fesao09/challenge)

Navegue até o diretório do projeto:

bash
Copy code
cd challenge
Abra o arquivo index.html em um navegador de sua escolha.

Estrutura do Projeto

index.html: Arquivo principal contendo a estrutura HTML do projeto.
style/style.css: Arquivo CSS para estilização do layout.
script.js: Arquivo JavaScript que implementa a lógica de criptografia, descriptografia e funcionalidades dos botões.
Como Usar
Digite o texto que você deseja criptografar ou descriptografar no campo de entrada.
Clique no botão "Criptografar" para criptografar o texto ou "Descriptografar" para descriptografar.
O resultado será exibido abaixo com a opção de copiar o texto para a área de transferência.
Clique em "Resetar" para limpar o campo de entrada e o resultado.

Código JavaScript
O código JavaScript realiza as seguintes funções:

Criptografia: Substitui as vogais por sequências específicas:

a → ai
e → enter
i → imes
o → ober
u → ufat
Descriptografia: Reverte as substituições para recuperar o texto original.

Eventos de Botão:

Criptografar: Aplica a função de criptografia e exibe o resultado.
Descriptografar: Aplica a função de descriptografia e exibe o resultado.
Copiar: Copia o texto exibido para a área de transferência e exibe uma mensagem de sucesso ou erro.
Resetar: Limpa o campo de entrada e redefine a mensagem exibida para "Nenhuma mensagem encontrada".
Estilo e Layout
O projeto utiliza CSS para estilizar e posicionar os elementos na página. Aqui estão alguns dos principais estilos aplicados:

Fonte e Cores: A fonte principal é Inter, com cores definidas para diversos elementos, como botões e textos.
Botões: Estilos específicos para os botões de criptografar, descriptografar, resetar e copiar, incluindo efeitos de hover.
Layout: Utiliza flexbox para criar um layout responsivo, com uma estrutura de colunas e linhas para alinhar os elementos.
Imagens: Estilos para imagens e a disposição delas no layout.
