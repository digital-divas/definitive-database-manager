window.onload = function () {
    let mime = 'text/x-mariadb';

    // 'text/x-sql'
    // 'text/x-mysql'
    // 'text/x-mariadb'
    // 'text/x-cassandra'
    // 'text/x-plsql'
    // 'text/x-mssql'
    // 'text/x-hive'
    // 'text/x-pgsql'
    // 'text/x-gql'
    // 'text/x-gpsql'
    // 'text/x-esper'

    const tables = {
        users: ["name", "score", "birthDate"],
        countries: ["name", "population", "size"]
    };

    window.editor = CodeMirror.fromTextArea(document.getElementById('code'), {
        mode: mime,
        indentWithTabs: true,
        smartIndent: true,
        lineNumbers: true,
        matchBrackets: true,
        autofocus: true,
        extraKeys: { "Ctrl-Space": "autocomplete" },
        hintOptions: {
            tables: tables
        }
    });

    function getTree() {

        let connection = {
            text: "MariaDB Connection",
            nodes: []
        };

        let tables_connection = {
            text: "Tables",
            nodes: []
        }

        connection.nodes.push(tables_connection);

        for (const table of Object.keys(tables)) {
            let table_connection = {
                text: table,
                nodes: []
            }
            for (const column of tables[table]) {
                table_connection.nodes.push({
                    text: column
                });
            }
            tables_connection.nodes.push(table_connection);
        }

        var tree = [connection];
        // Some logic to retrieve, or generate tree structure
        return tree;
    }

    $('#connections').treeview({ data: getTree(), levels: 99 });
};