import { Component, OnInit, OnDestroy } from '@angular/core';
import * as _ from 'lodash';
import * as $ from 'jquery';
import { interval, config } from 'rxjs';
import * as ace from 'brace';
import { Dropbox } from 'dropbox';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material';
import { Editor } from 'brace';
import 'ace-builds/src-noconflict/ace';
import 'brace/ext/beautify';
import 'brace/ext/elastic_tabstops_lite';
import 'brace/ext/emmet';
import 'brace/ext/error_marker';
import 'brace/ext/keybinding_menu';
import 'brace/ext/language_tools';
import 'brace/ext/linking';
import 'brace/ext/modelist';
import 'brace/ext/searchbox';
import 'brace/ext/settings_menu';
import 'brace/ext/spellcheck';
import 'brace/ext/split';
import 'brace/ext/static_highlight';
import 'brace/ext/statusbar';
import 'brace/ext/textarea';
import 'brace/ext/themelist';
import 'brace/ext/whitespace';
import 'brace/keybinding/emacs';
import 'brace/keybinding/vim';
import 'brace/theme/ambiance';
import 'brace/theme/chaos';
import 'brace/theme/chrome';
import 'brace/theme/clouds';
import 'brace/theme/clouds_midnight';
import 'brace/theme/cobalt';
import 'brace/theme/crimson_editor';
import 'brace/theme/dawn';
import 'brace/theme/dreamweaver';
import 'brace/theme/eclipse';
import 'brace/theme/github';
import 'brace/theme/idle_fingers';
import 'brace/theme/iplastic';
import 'brace/theme/katzenmilch';
import 'brace/theme/kr_theme';
import 'brace/theme/kuroir';
import 'brace/theme/merbivore';
import 'brace/theme/merbivore_soft';
import 'brace/theme/monokai';
import 'brace/theme/mono_industrial';
import 'brace/theme/pastel_on_dark';
import 'brace/theme/solarized_dark';
import 'brace/theme/solarized_light';
import 'brace/theme/sqlserver';
import 'brace/theme/terminal';
import 'brace/theme/textmate';
import 'brace/theme/tomorrow';
import 'brace/theme/tomorrow_night';
import 'brace/theme/tomorrow_night_blue';
import 'brace/theme/tomorrow_night_bright';
import 'brace/theme/tomorrow_night_eighties';
import 'brace/theme/twilight';
import 'brace/theme/vibrant_ink';
import 'brace/theme/xcode';
import 'brace/mode/abap';
import 'brace/mode/abc';
import 'brace/mode/actionscript';
import 'brace/mode/ada';
import 'brace/mode/apache_conf';
import 'brace/mode/applescript';
import 'brace/mode/asciidoc';
import 'brace/mode/assembly_x86';
import 'brace/mode/autohotkey';
import 'brace/mode/batchfile';
import 'brace/mode/bro';
import 'brace/mode/c9search';
import 'brace/mode/cirru';
import 'brace/mode/clojure';
import 'brace/mode/cobol';
import 'brace/mode/coffee';
import 'brace/mode/coldfusion';
import 'brace/mode/csharp';
import 'brace/mode/css';
import 'brace/mode/curly';
import 'brace/mode/c_cpp';
import 'brace/mode/d';
import 'brace/mode/dart';
import 'brace/mode/diff';
import 'brace/mode/django';
import 'brace/mode/dockerfile';
import 'brace/mode/dot';
import 'brace/mode/drools';
import 'brace/mode/eiffel';
import 'brace/mode/ejs';
import 'brace/mode/elixir';
import 'brace/mode/elm';
import 'brace/mode/erlang';
import 'brace/mode/forth';
import 'brace/mode/fortran';
import 'brace/mode/ftl';
import 'brace/mode/gcode';
import 'brace/mode/gherkin';
import 'brace/mode/gitignore';
import 'brace/mode/glsl';
import 'brace/mode/gobstones';
import 'brace/mode/golang';
import 'brace/mode/groovy';
import 'brace/mode/haml';
import 'brace/mode/handlebars';
import 'brace/mode/haskell';
import 'brace/mode/haskell_cabal';
import 'brace/mode/haxe';
import 'brace/mode/hjson';
import 'brace/mode/html';
import 'brace/mode/html_elixir';
import 'brace/mode/html_ruby';
import 'brace/mode/ini';
import 'brace/mode/io';
import 'brace/mode/jack';
import 'brace/mode/jade';
import 'brace/mode/java';
import 'brace/mode/javascript';
import 'brace/mode/json';
import 'brace/mode/jsoniq';
import 'brace/mode/jsp';
import 'brace/mode/jsx';
import 'brace/mode/julia';
import 'brace/mode/kotlin';
import 'brace/mode/latex';
import 'brace/mode/lean';
import 'brace/mode/less';
import 'brace/mode/liquid';
import 'brace/mode/lisp';
import 'brace/mode/livescript';
import 'brace/mode/live_script';
import 'brace/mode/logiql';
import 'brace/mode/lsl';
import 'brace/mode/lua';
import 'brace/mode/luapage';
import 'brace/mode/lucene';
import 'brace/mode/makefile';
import 'brace/mode/markdown';
import 'brace/mode/mask';
import 'brace/mode/matlab';
import 'brace/mode/mavens_mate_log';
import 'brace/mode/maze';
import 'brace/mode/mel';
import 'brace/mode/mipsassembler';
import 'brace/mode/mips_assembler';
import 'brace/mode/mushcode';
import 'brace/mode/mysql';
import 'brace/mode/nix';
import 'brace/mode/nsis';
import 'brace/mode/objectivec';
import 'brace/mode/ocaml';
import 'brace/mode/pascal';
import 'brace/mode/perl';
import 'brace/mode/pgsql';
import 'brace/mode/php';
import 'brace/mode/plain_text';
import 'brace/mode/powershell';
import 'brace/mode/praat';
import 'brace/mode/prolog';
import 'brace/mode/properties';
import 'brace/mode/protobuf';
import 'brace/mode/python';
import 'brace/mode/r';
import 'brace/mode/razor';
import 'brace/mode/rdoc';
import 'brace/mode/rhtml';
import 'brace/mode/rst';
import 'brace/mode/ruby';
import 'brace/mode/rust';
import 'brace/mode/sass';
import 'brace/mode/scad';
import 'brace/mode/scala';
import 'brace/mode/scheme';
import 'brace/mode/scss';
import 'brace/mode/sh';
import 'brace/mode/sjs';
import 'brace/mode/smarty';
import 'brace/mode/snippets';
import 'brace/mode/soy_template';
import 'brace/mode/space';
import 'brace/mode/sql';
import 'brace/mode/sqlserver';
import 'brace/mode/stylus';
import 'brace/mode/svg';
import 'brace/mode/swift';
import 'brace/mode/swig';
import 'brace/mode/tcl';
import 'brace/mode/tex';
import 'brace/mode/text';
import 'brace/mode/textile';
import 'brace/mode/toml';
import 'brace/mode/tsx';
import 'brace/mode/twig';
import 'brace/mode/typescript';
import 'brace/mode/vala';
import 'brace/mode/vbscript';
import 'brace/mode/velocity';
import 'brace/mode/verilog';
import 'brace/mode/vhdl';
import 'brace/mode/wollok';
import 'brace/mode/xml';
import 'brace/mode/xquery';
import 'brace/mode/yaml';
import 'brace/worker/c_cpp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  /** Tematy kolorystyczne edytora. */
  // tslint:disable-next-line:max-line-length
  themes = ['ambiance', 'chaos', 'chrome', 'clouds', 'clouds_midnight', 'cobalt', 'crimson_editor', 'dawn', 'dreamweaver', 'eclipse', 'github', 'idle_fingers', 'iplastic', 'katzenmilch', 'kr_theme', 'kuroir', 'merbivore', 'merbivore_soft', 'monokai', 'mono_industrial', 'pastel_on_dark', 'solarized_dark', 'solarized_light', 'sqlserver', 'terminal', 'textmate', 'tomorrow', 'tomorrow_night', 'tomorrow_night_blue', 'tomorrow_night_bright', 'tomorrow_night_eighties', 'twilight', 'vibrant_ink', 'xcode'];
  /** Języki programowania wspierane przez edytor. */
  // tslint:disable-next-line:max-line-length
  languages = { 'abap': 'abap', 'abc': 'abc', 'as': 'actionscript', 'ada': 'ada', 'apache_conf': 'apache_conf', 'applescript': 'applescript', 'adoc': 'asciidoc', 'asl': 'asl', 'asm': 'assembly_x86', 'ahk': 'autohotkey', 'bat': 'batchfile', 'bro': 'bro', 'c9search': 'c9search', 'cirru': 'cirru', 'clj': 'clojure', 'cobol': 'cobol', 'coffee': 'coffee', 'cfm': 'coldfusion', 'cs': 'csharp', 'csd': 'csound_document', 'orc': 'csound_orchestra', 'sco': 'csound_score', 'csp': 'csp', 'css': 'css', 'curly': 'curly', 'cpp': 'c_cpp', 'h': 'c_cpp', 'd': 'd', 'dart': 'dart', 'diff': 'diff', 'django': 'django', 'dockerfile': 'dockerfile', 'dot': 'dot', 'drl': 'drools', 'edi': 'edifact', 'e': 'eiffel', 'ejs': 'ejs', 'ex': 'elixir', 'elm': 'elm', 'erl': 'erlang', 'forth': 'forth', 'f': 'fortran', 'fs': 'fsharp', 'ftl': 'ftl', 'gcode': 'gcode', 'gherkin': 'gherkin', 'gitignore': 'gitignore', 'glsl': 'glsl', 'gobstones': 'gobstones', 'go': 'golang', 'graphql': 'graphqlschema', 'groovy': 'groovy', 'haml': 'haml', 'handlebars': 'handlebars', 'hs': 'haskell', 'cabal': 'haskell_cabal', 'hx': 'haxe', 'hjson': 'hjson', 'html': 'html', 'htm': 'html', 'html_elixir': 'html_elixir', 'html_ruby': 'html_ruby', 'ini': 'ini', 'io': 'io', 'jack': 'jack', 'jade': 'jade', 'java': 'java', 'js': 'javascript', 'json': 'json', 'jsoniq': 'jsoniq', 'jsp': 'jsp', 'jssm': 'jssm', 'jsx': 'jsx', 'jl': 'julia', 'kt': 'kotlin', 'less': 'less', 'liquid': 'liquid', 'lisp': 'lisp', 'ls': 'livescript', 'logiql': 'logiql', 'lsl': 'lsl', 'lua': 'lua', 'luapage': 'luapage', 'lucene': 'lucene', 'makefile': 'makefile', 'md': 'markdown', 'mask': 'mask', 'm': 'matlab', 'mat': 'matlab', 'maze': 'maze', 'mel': 'mel', 'mdk': 'mixal', 'mush': 'mushcode', 'mysql': 'mysql', 'nix': 'nix', 'nsis': 'nsis', 'mm': 'objectivec', 'ocaml': 'ocaml', 'p': 'pascal', 'pl': 'pascal', 'pas': 'pascal', 'perl': 'perl', 'pgsql': 'pgsql', 'php': 'php', 'php_laravel_blade': 'php_laravel_blade', 'pig': 'pig', 'plain_text': 'plain_text', 'ps1': 'powershell', 'praat': 'praat', 'prolog': 'prolog', 'properties': 'properties', 'protobuf': 'protobuf', 'puppet': 'puppet', 'py': 'python', 'r': 'r', 'razor': 'razor', 'rdoc': 'rdoc', 'red': 'red', 'redshift': 'redshift', 'rhtml': 'rhtml', 'rst': 'rst', 'ruby': 'ruby', 'rust': 'rust', 'sass': 'sass', 'scad': 'scad', 'scala': 'scala', 'scheme': 'scheme', 'scss': 'scss', 'sh': 'sh', 'sjs': 'sjs', 'slim': 'slim', 'smarty': 'smarty', 'snippets': 'snippets', 'soy_template': 'soy_template', 'space': 'space', 'sparql': 'sparql', 'sql': 'sql', 'sqlserver': 'sqlserver', 'stylus': 'stylus', 'svg': 'svg', 'swift': 'swift', 'tcl': 'tcl', 'tf': 'terraform', 'tex': 'tex', 'txt': 'text', 'textile': 'textile', 'toml': 'toml', 'tsx': 'tsx', 'ttl': 'turtle', 'twig': 'twig', 'ts': 'typescript', 'vala': 'vala', 'vbs': 'vbscript', 'vm': 'velocity', 'v': 'verilog', 'vhdl': 'vhdl', 'wollok': 'wollok', 'xml': 'xml', 'xquery': 'xquery', 'yaml': 'yaml' };
  /** Rozmiary czcionki edytora. */
  fontSizes = [12, 14, 16, 18, 20, 22, 24, 26, 30];
  /** Fonty edytora. */
  fonts = ['Consolas', 'Courier New', 'Arial'];
  /** Zawartość aktualnie otwartej karty. */
  contents;
  /** Ścieżka aktualnie otwartego pliku. */
  filePath: string;
  /** Pliki w eksploratorze plików. */
  filesList;
  /** Foldery w eksploratorze plików. */
  foldersList;
  /** Ścieżka otwartego folderu w eksploratorze plików. */
  folderPath = '';
  /** Ścieżka pliku otwartego w karcie. */
  tabPath;
  /** Konfiguracja edytora. */
  config = {
    wrapMode: true,
    lastFiles: '',
    theme: this.themes[21],
    font: 'Consolas',
    fontSize: 20,
    autoSave: true,
    openFiles: [],
    moveExplorer: false,
    configAutoSave: true
  };
  /** Otwarte karty. */
  tabs = new Array();
  /** Instancja klienta Dropbox. */
  dbx = new Dropbox({ accessToken: document.cookie });
  /** Instancja edytora Ace. */
  editor: Editor;
  /** Wybrana karta. */
  selected = new FormControl(0);
  /** Token. */
  private token;

  /** Pokazuje właściwości otwartego pliku. */
  showProperties(response) {
    $('#properties').fadeIn();
    $('#propertiesTitle').fadeIn();
    document.getElementById('fileSize').innerHTML = ((response.size / 1024).toFixed(2) + ' KB');
    const startTimeISOString = response.server_modified;
    let startTime = new Date(startTimeISOString);
    startTime = new Date(startTime.getTime() + (startTime.getTimezoneOffset() * 60000));
    document.getElementById('fileMod').innerHTML = startTime.toLocaleDateString();
  }

  /** Wykonana zostaje po otwarciu karty edytora, pobiera zasoby z konta Dropbox. */
  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.filePath = tabChangeEvent.tab.textLabel;
    $('#loadingfile').show();
    const ext = this.filePath.split('.').pop();
    const lowerExt = ext.toLowerCase();
    if (lowerExt === 'png' || lowerExt === 'jpg' || lowerExt === 'jpeg' || lowerExt === 'svg') {
      this.getThumbnail(this.filePath);
    } else {
      this.dbx.filesDownload({ path: this.filePath })
        .then((response) => {
          const blob = response.fileBlob;
          const reader = new FileReader();
          this.showProperties(response);
          reader.onloadend = () => {
            $('#loadingfile').hide();
            this.contents = reader.result;
            this.editor = ace.edit('editor');
            this.editor.getSession().setValue(this.contents);
            this.editor.focus();
            this.editor.setTheme('ace/theme/' + this.config.theme);
            this.editor.getSession().setMode('ace/mode/' + this.languages[ext]);
            this.editor.getSession().setUseWrapMode(this.config.wrapMode);
            document.getElementById('editor').style.fontFamily = this.config.font;
            document.getElementById('editor').style.fontSize = this.config.fontSize + 'px';
            this.config.openFiles = this.tabs;
            this.saveConfig();
          };
          reader.readAsText(blob);
        });
    }
  }

  /** Aktualizuje temat kolorstyczny. */
  updateTheme(theme) {
    this.editor.setTheme('ace/theme/' + this.config.theme);
    this.config.theme = theme;
  }

  /** Aktualizuje font. */
  updateFont(font) {
    document.getElementById('editor').style.fontFamily = font;
    this.config.font = font;
  }

  /** Aktualizuje font. */
  updateFontSize(fontSize) {
    document.getElementById('editor').style.fontSize = fontSize + 'px';
    this.config.fontSize = fontSize;
  }

  /** Aktualizuje zawijanie wierszy. */
  updateWrapMode(wrapMode) {
    if (this.config.wrapMode === true) {
      this.editor.getSession().setUseWrapMode(true);
    } else {
      this.editor.getSession().setUseWrapMode(false);
    }
    this.config.wrapMode = wrapMode;
  }

  /** Aktualizuje font. */
  removeTab(index: number) {
    this.filePath = null;
    this.tabPath.splice(this.tabPath.indexOf(this.filePath), 1);
    this.tabs.splice(index, 1);
    this.config.openFiles = this.tabs;
    this.saveConfig();
    if (this.tabs.length < 1) {
      $('#properties').fadeOut();
      $('#propertiesTitle').fadeOut();
    }
  }

  /** Pokazuje lub chowa panel boczny. */
  setExplorer() {
    if ($('#explorer:visible').length === 0) {
      $('#explorer').fadeIn();
    } else {
      $('#explorer').fadeOut();
    }
  }

  /** Przenosi panel boczny w prawą lub lewą stronę. */
  moveExplorer() {
    if (this.config.moveExplorer === true) {
      $('#explorer').insertBefore('#code');
    } else {
      $('#code').insertBefore('#explorer');
    }
  }

  /** Uruchamia się po tym jak Angular zainicjuje wszystkie związane z danymi właściwości dyrektywy. */
  ngOnInit() {
    if (navigator.cookieEnabled) {
      if (this.getHashValue('access_token') !== null) {
        document.cookie = this.getHashValue('access_token');
        history.pushState(null, null, 'http://localhost:4200/');
        window.location.replace('http://localhost:4200/');
      }
      if (document.cookie.length < 2) {
        const modal = document.getElementById('auth');
        modal.style.display = 'block';
      }
    } else {
      console.log('Nie obsługuję ciasteczek');
    }
    this.tabPath = new Array();
    this.loadConfig();

    /** Wyświetla komunikat w przypadku, gdy karta przegladarki ma zostać zamknieta. */
    $(document).ready(() => {
      if (document.cookie) {
        $(window).on('beforeunload', () => {
          return 'Niezapisane zmiany zostaną utracone!';
        });
        $(document).on('submit', 'form', () => {
          $(window).off('beforeunload');
        });
      }
    });

    /** Tworzy skróty klawiszowe. */
    $(document).bind('keydown', (e) => {
      if (e.ctrlKey && (e.which === 83)) { // ctrl + s
        e.preventDefault();
        this.saveFile();
        return false;
      }
      if (e.ctrlKey && (e.which === 66)) { // ctrl + b
        e.preventDefault();
        this.setExplorer();
        return false;
      }
      if (e.ctrlKey && (e.which === 78)) { // ctrl + n
        e.preventDefault();
        this.createFile();
        return false;
      }
    });

    this.downloadList(false);
    // tslint:disable-next-line:no-unused-expression
    interval(5 * 1000).subscribe(x => this.downloadList(false));
    if (this.config.autoSave === true) { interval(10 * 1000).subscribe(x => this.saveFile()); }
  }

  /** Przenosi do adresu autoryzacyjnego. */
  auth() {
    // tslint:disable-next-line:max-line-length
    window.location.href = 'https://www.dropbox.com/oauth2/authorize?client_id=cbwtbou2fk0gf2g&response_type=token&redirect_uri=http://localhost:4200&state=us7dk48kd21axls';
  }

  /** Tworzy folder. */
  createFolder() {
    let path = prompt('Wprowadź nazwę folderu', 'Nowy folder');
    if (path === null) { return; }
    if (path !== null || path !== '') {
      path = this.folderPath + '/' + path;
      this.dbx.filesCreateFolder({
        path: path,
        autorename: true
      })
        .then(() => {
          this.downloadList(true);
        })
        .catch(function (error) {
          console.error(error);
          $('#loadingfile').hide();
          alert('Błąd tworzenia folderu. Spróbuj ponownie.');
        });
    }
  }

  /** Tworzy plik tekstowy. */
  createFile() {
    const path = prompt('Wprowadź nazwę pliku', '');
    if (path === null) { return; }
    const fpath = this.folderPath + '/' + path;
    if (path !== null || path !== '') {
      this.dbx.filesUpload({
        path: fpath,
        contents: '',
        mode: { '.tag': 'overwrite' },
        autorename: true,
        mute: true,
        strict_conflict: false
      })
        .then(() => {
          this.downloadFile(path, false);
          this.downloadList(false);
        })
        .catch(function (error) {
          console.error(error);
          $('#loadingfile').hide();
          alert('Błąd tworzenia pliku. Spróbuj ponownie.');
        });
    }
  }

  /** Usuwa plik ze ścieżki wskazanej w argumencie. */
  deleteFile(path) {
    if (confirm('Czy aby na pewno chcesz usunąć "' + path + '" ?')) {
      path = this.folderPath + '/' + path;
      this.dbx.filesDelete({
        path: path
      })
        .then(() => {
          this.downloadList(true);
        })
        .catch(function (error) {
          console.error(error);
          alert('Błąd usuwania pliku. Spróbuj ponownie.');
        });
    }
  }

  /** Pobiera plik wskazany w argumencie i otwiera w nowej karcie, lub zapisuje na dysku twardym. */
  downloadFile(path, saveOnDisc) {
    this.filePath = this.folderPath + '/' + path;
    if (saveOnDisc === false) {
      if ($.inArray(this.filePath, this.tabs) === -1) {
        this.tabs.push(this.folderPath + '/' + path);
        this.selected.setValue(this.tabs.length - 1);
      }
    } else {
      this.dbx.filesDownload({ path: this.folderPath + '/' + path })
        .then((response) => {
          const blob = response.fileBlob;
          this.tabPath.push(this.folderPath + '/' + path);
          const a = window.document.createElement('a');
          a.href = window.URL.createObjectURL(blob);
          a.download = path;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        })
        .catch(function (error) {
          console.error(error);
          $('#loadingfile').hide();
          alert('Błąd ładowania pliku. Spróbuj ponownie.');
        });
    }
  }

  /** Pobiera folder wskazany w argumencie i zapisuje na dysku twardym w postaci pliku ZIP. */
  downloadFolder(path) {
    this.dbx.filesDownloadZip({
      path: this.folderPath + '/' + path
    })
      .then((response) => {
        const blob = response['fileBlob'];
        const a = window.document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = path;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch(function (error) {
        console.error(error);
        alert('Błąd pobierania folderu. Spróbuj ponownie.');
      });
  }

  /** Pobiera listę plików i wyświetla ją w panelu bocznym. */
  downloadList(alert) {
    if (alert === true) {
      $('#loadinglist').show();
      this.foldersList = null;
      this.filesList = null;
    }
    this.dbx.filesListFolder({ path: this.folderPath })
      .then((response) => {
        const folders = response.entries.filter(a => a['.tag'] === 'folder');
        const files = response.entries.filter(a => a['.tag'] === 'file');
        this.foldersList = folders.map(a => a.name).sort();
        this.filesList = files.map(a => a.name).sort();
        $('#loadinglist').hide();
        (<HTMLInputElement>document.getElementById('goUpList')).disabled = false;
        document.getElementById('stats').innerHTML = 'Połączono z kontem Dropbox';
        document.getElementById('stats').style.color = 'Chartreuse';
      })
      .catch(function (error) {
        console.error(error);
        document.getElementById('stats').innerHTML = 'Wystąpił błąd, sprawdź połączenie z Internetem';
        document.getElementById('stats').style.color = '#ff6464';
        $('#loadinglist').hide();
      });
  }

  /** Pobiera miniaturę obrazu wskazanego w argumencie. */
  getThumbnail(path) {
    console.log(path);
    this.dbx.filesGetThumbnail({
      path: path,
      format: { '.tag': 'png' },
      size: { '.tag': 'w1024h768' },
      mode: { '.tag': 'bestfit' }
    })
      .then((response) => {
        const url = URL.createObjectURL(response.fileBlob);
        const img = new Image();
        img.src = url;
        $('#loadingfile').hide();
        $('#editor').empty().append(img);
      })
      .catch(function (error) {
        console.error(error);
        $('#loadingfile').hide();
        $('#editor').empty().append('Błąd ładowania obrazu. Spróbuj ponownie.');
      });
  }

  /** Wyciąga z adresu token za znakiem hash. */
  // tslint:disable-next-line:use-life-cycle-interface
  getHashValue(key) {
    const matches = location.hash.match(new RegExp(key + '=([^&]*)'));
    return matches ? matches[1] : null;
  }

  /** Przenosi do folderu wstecz w eksploratorze plików. */
  goUpList() {
    this.folderPath = this.folderPath.substring(0, this.folderPath.lastIndexOf('/'));
    (<HTMLInputElement>document.getElementById('goUpList')).disabled = true;
    this.downloadList(true);
  }

  /** Przenosi lub zmienia nazwę pliku wskazanego w argumencie. */
  moveFile(path) {
    const to_path = prompt('Wprowadź gdzie chcesz przenieść (lub zmienić nazwę) ' + path, this.folderPath + '/' + path);
    if (to_path === null) { return; }
    if (to_path !== null || path !== '') {
      path = this.folderPath + '/' + path;
      this.dbx.filesMove({
        from_path: path,
        to_path: to_path,
        allow_shared_folder: true,
        autorename: true,
        allow_ownership_transfer: true
      })
        .then(() => {
          this.downloadList(true);
        })
        .catch(function (error) {
          console.error(error);
          alert('Błąd przenoszenia / zmiany nazwy. Spróbuj ponownie.');
        });
    }
  }

  /** Otwiera folder wskazany w argumencie, w eksploratorze plików. */
  openFolder(path) {
    if (path !== '') { this.folderPath = this.folderPath + '/' + path; }
    this.downloadList(true);
  }

  /** Otwiera panel ustawień. */
  settings() {
    const span = (<HTMLInputElement>document.getElementsByClassName('close')[0]);
    span.onclick = () => {
      $('#settings').fadeOut();
    };
    $('#settings').fadeIn();
  }

  /** Zapisuje aktualnie edytowany plik. */
  saveFile() {
    const ext = this.filePath.split('.').pop();
    const lowerExt = ext.toLowerCase();
    if (!(lowerExt === 'png' || lowerExt === 'jpg' || lowerExt === 'jpeg' || lowerExt === 'svg')) {
      this.dbx.filesUpload({
        path: this.filePath,
        contents: this.editor.getSession().getValue(),
        mode: { '.tag': 'overwrite' },
        autorename: true,
        mute: true,
        strict_conflict: false
      })
        .catch(function (error) {
          console.error(error);
        });
    }
  }

  /** Zapisuje konfigurację. */
  saveConfig() {
    if (this.config.configAutoSave === true) {
    this.dbx.filesUpload({
      path: '/.skynotepad.json',
      contents: JSON.stringify(this.config),
      mode: { '.tag': 'overwrite' },
      autorename: true,
      mute: true,
      strict_conflict: false
    })
      .catch(function (error) {
        console.error(error);
      });
    }
  }

  /** Wczytuje konfigurację. */
  loadConfig() {
    this.dbx.filesDownload({ path: '/.skynotepad.json' })
      .then((response) => {
        const blob = response.fileBlob;
        const reader = new FileReader();
        this.showProperties(response);
        reader.onloadend = () => {
          const configContent = String(reader.result);
          this.config = JSON.parse(configContent);
          this.moveExplorer();
          for (let i = 0; i < this.config.openFiles.length; i++) {
            this.filePath = this.config.openFiles[i];
            this.downloadFile(this.config.openFiles[i].substring(1), false);
          }
          this.tabChanged(null);
        };
        reader.readAsText(blob);
      })
      .catch(function (error) {
        console.error(error);
        this.config = this.defaultConfig;
      });
  }

  /** Przywracja domyślne ustawienia konfiguracji. */
  resetConfig() {
    this.config = {
      wrapMode: true,
      lastFiles: '',
      theme: this.themes[21],
      font: 'Consolas',
      fontSize: 20,
      autoSave: true,
      openFiles: [],
      moveExplorer: false,
      configAutoSave: true
    };
    this.moveExplorer();
    this.updateFont(this.config.font);
    this.updateFontSize(this.config.fontSize);
    this.updateWrapMode(this.config.wrapMode);
  }

  /** Wylogowuje konto Dropbox i unieważnia token. */
  logout() {
    document.cookie = '';
    window.location.href = 'https://www.dropbox.com/logout';
    this.dbx.authTokenRevoke(this.token);
  }
}
