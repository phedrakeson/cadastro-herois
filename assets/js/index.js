const API_BASE_PATH = 'https://cadastro-herois-api.herokuapp.com';

(function () {
  const reloadList = () => {
    $('#list').empty();

    axios.get(`${API_BASE_PATH}/herois`)
      .then(({ data }) => {
        data.forEach(heroi => {
          $('#list').append(`
            <tr>
              <input type="hidden" name="id" value="${heroi.id}">
              <td>${heroi.nome}</td>
              <td>${heroi.poderes}</td>
              <td>${heroi.fraquezas}</td>
              <td>${heroi.raca}</td>
              <td width="350">
                <button type="button" class="btn btn-primary btn-preview">
                  <i class="far fa-eye"></i>
                  Visualizar
                </button>

                <button type="button" class="btn btn-secondary btn-editar">
                  <i class="far fa-edit"></i>
                  Editar
                </button>

                <button type="button" class="btn btn-danger btn-delete">
                  <i class="far fa-trash-alt"></i>
                  Remover
                </button>
              </td>
            </tr>
          `)
        });

        // CARREGAR MODAL COM O HEROI SELECIONADO PARA EDITAR
        $('.btn-editar').on('click', function (event) {
          event.preventDefault();
          const rowID = $(event.target).closest('tr').find('input[name="id"]').val();

          axios.get(`${API_BASE_PATH}/heroi/${rowID}`)
            .then(({ data }) => {
              $('#editar-id').val(rowID);
              $('#editar-nome').val(data.nome).prop('disabled', false);
              $('#editar-poderes').val(data.poderes).prop('disabled', false);
              $('#editar-fraquezas').val(data.fraquezas).prop('disabled', false);
              $('#editar-raca').val(data.raca).prop('disabled', false);
              $('#editar-filiacao').val(data.filiacao).prop('disabled', false);
              $('#editar-origem').val(data.origem).prop('disabled', false);
              $('#editar-personalidade').val(data.personalidade).prop('disabled', false);
              $('#editar-ocupacao').val(data.ocupacao).prop('disabled', false);
              $('#editar-historia').val(data.historia).prop('disabled', false);
              $('#editarHeroiModal').modal('toggle');
            })
        });

        $('.btn-delete').on('click', function (event) {
          event.preventDefault();
          const rowID = $(event.target).closest('tr').find('input[name="id"]').val();
          const name = $(event.target).closest('tr').find('td:nth-child(2)').text();

          axios.delete(`${API_BASE_PATH}/heroi/${rowID}`)
            .then(({ data }) => {
              if (data.ok) {
                $('#alert-success').text(`Heroi (${name}) removido com sucesso!`);
                $('#alert-success').show();
                reloadList();
                setTimeout(() => $('#alert-success').hide(), 3000);
              } else {
                $('#alert-error').text(`Não foi possivel remover o heroi (${name}), tente novamente!`);
                $('#alert-error').show();
                setTimeout(() => $('#alert-error').hide(), 3000);
              }
            })
            .catch(() => {
              $('#alert-error').text(`Não foi possivel remover o heroi (${name}), tente novamente!`);
              $('#alert-error').show();
              setTimeout(() => $('#alert-error').hide(), 3000);
            })
        });

        $('.btn-preview').on('click', function (event) {
          event.preventDefault();
          const rowID = $(event.target).closest('tr').find('input[name="id"]').val();
          const modalTitle = $('#editarHeroiModalLabel').text();

          axios.get(`${API_BASE_PATH}/heroi/${rowID}`)
            .then(({ data }) => {
              $('#editar-id').val(rowID);
              $('#editar-nome').val(data.nome).prop('disabled', true);
              $('#editar-poderes').val(data.poderes).prop('disabled', true);
              $('#editar-fraquezas').val(data.fraquezas).prop('disabled', true);
              $('#editar-raca').val(data.raca).prop('disabled', true);
              $('#editar-filiacao').val(data.filiacao).prop('disabled', true);
              $('#editar-origem').val(data.origem).prop('disabled', true);
              $('#editar-personalidade').val(data.personalidade).prop('disabled', true);
              $('#editar-ocupacao').val(data.ocupacao).prop('disabled', true);
              $('#editar-historia').val(data.historia).prop('disabled', true);
              $('#editarHeroiModal').modal('toggle');
            })

          $('#editarHeroiModalLabel').text('Visualizar Herói');
          $('#btn-editar-heroi').hide();
          $('#editarHeroiModal').modal('toggle');

          $('#editarHeroiModal').on('hidden.bs.modal', function () {
            $('#editarHeroiModalLabel').text(modalTitle);
            $('#btn-editar-heroi').show();
            $('#editarHeroiModal').off('hidden.bs.modal');
          })
        })
      })
  }

  document.addEventListener("DOMContentLoaded", function () {
    // CARREGAR LISTA DE HEROIS
    reloadList();

    // SALVAR NOVO HEROI
    $('#btn-salvar-heroi').on('click', function () {
      const campos = {
        nome: $('#salvar-nome').val(),
        poderes: $('#salvar-poderes').val(),
        fraquezas: $('#salvar-fraquezas').val(),
        raca: $('#salvar-raca').val(),
        filiacao: $('#salvar-filiacao').val(),
        origem: $('#salvar-origem').val(),
        personalidade: $('#salvar-personalidade').val(),
        ocupacao: $('#salvar-ocupacao').val(),
        historia: $('#salvar-historia').val(),
      };

      if (!Object.values(campos).some(item => item === "")) {
        axios.post(`${API_BASE_PATH}/novo`, campos)
          .then(({ data }) => {
            if (data.ok) {
              $('#alert-success').text(`Heroi (${campos.nome}) salvo com sucesso!`);
              $('#alert-success').show();

              reloadList();
              setTimeout(() => $('#alert-success').hide(), 3000);
            } else {
              $('#alert-error').text(`Não foi possivel salvar o heroi (${campos.nome}), tente novamente!`);
              $('#alert-error').show();
              setTimeout(() => $('#alert-error').hide(), 3000);
            }
          })
          .catch(() => {
            $('#alert-error').text(`Não foi possivel salvar o heroi (${campos.nome}), tente novamente!`);
            $('#alert-error').show();
            setTimeout(() => $('#alert-error').hide(), 3000);
          })
          .finally(() => {
            $('#novoHeroiModal').modal('toggle');
          });
      } else {
        $('#novo-error').show();
        setTimeout(() => $('#novo-error').hide(), 3000);
      }
    });

    // EDITAR HEROI
    $('#btn-editar-heroi').on('click', function (event) {
      event.preventDefault();
      const rowID = $('#editar-id').val();

      const campos = {
        id: $('#editar-id').val(),
        nome: $('#editar-nome').val(),
        poderes: $('#editar-poderes').val(),
        fraquezas: $('#editar-fraquezas').val(),
        raca: $('#editar-raca').val(),
        filiacao: $('#editar-filiacao').val(),
        origem: $('#editar-origem').val(),
        personalidade: $('#editar-personalidade').val(),
        ocupacao: $('#editar-ocupacao').val(),
        historia: $('#editar-historia').val(),
      };

      if (!Object.values(campos).some(item => item === "")) {
        axios.post(`${API_BASE_PATH}/heroi/${rowID}`, campos)
          .then(({ data }) => {
            if (data.ok) {
              $('#alert-success').text(`Heroi (${campos.nome}) alterado com sucesso!`);
              $('#alert-success').show();
              reloadList();

              setTimeout(() => {
                $('#alert-success').hide();
              }, 3000);
            } else {
              $('#alert-error').text(`Não foi possivel alterar o heroi (${campos.nome}), tente novamente!`);
              $('#alert-error').show();
              setTimeout(() => $('#alert-error').hide(), 3000);
            }
          })
          .catch(() => {
            $('#alert-error').text(`Não foi possivel alterar o heroi (${campos.nome}), tente novamente!`);
            $('#alert-error').show();
            setTimeout(() => $('#alert-error').hide(), 3000);
          })
          .finally(() => {
            $('#editarHeroiModal').modal('toggle');
          });
      } else {
        $('#editar-error').show();
        setTimeout(() => $('#editar-error').hide(), 3000);
      }
    });
  });
})();