# Ludus の OKF データ

このディレクトリは、Ludusの「あそびの辞書」を [Open Knowledge Format (OKF)](https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing) で保存する場所です。

OKFでは、各Markdownファイルを一つの概念とし、YAML frontmatterに検索・投入に必要な属性を持たせます。通常のMarkdownリンクが概念間の関係を表すため、人間・AI・グラフDB投入器が同じソースを読めます。

## `ludus-play/`

Notionの「ゲーム構造一覧 (テンプレート一覧)」を取り込んだ遊びの辞書です。原典に未収録の代表ジャンルと横断要素は、Ludus編集補足の [`ludus-play-supplement.json`](ludus-play-supplement.json) に分離して保持します。各ジャンルの主要システムに対して、次を明示します。

- 目標とするUX成果
- 取り扱うドメイン要素
- 汎用実装の判断
- Pictorに切り出せる視覚表現の候補
- 実装順序の前提

原典のJSONグラフがローカルにある場合は、次のコマンドで再生成できます。

```powershell
node tools/import-game-knowledge-graph.mjs --source .\path\to\game-knowledge-graph --timestamp 2026-07-15T00:00:00+09:00
```

生成される `ludus-play/exports/property-graph.json` は、OKFリンクを明示的なノード・エッジへ投影した将来のGraphDB投入用データです。接続先のGraphDB製品はまだ決めないため、この段階では製品非依存のProperty Graph JSONを正本とします。

## Steam 市場スナップショット

Steamの人気タグとトップセラーは、取得条件を [`../steam-crawl-config.json`](../steam-crawl-config.json) に固定し、次のコマンドで取得します。APIの種別がゲームでない候補は除外され、ゲーム順位を振り直します。

```powershell
node tools/crawl-steam-catalog.mjs --config spec/data/steam-crawl-config.json --output spec/data/steam-crawl-2026-07-15.json --timestamp 2026-07-15T00:00:00+09:00
```

取得結果は [`../steam-crawl-2026-07-15.json`](../steam-crawl-2026-07-15.json)、Ludus向けの編集判断は [`ludus-steam-supplement.json`](ludus-steam-supplement.json) に分離します。Steamタグはジャンル、テーマ、属性を混在させるため、`Indie`、`Early Access`、`Free to Play`のような販売・配信属性はジャンルへ昇格させません。複数タイトルで反復し、仕様へシステム分解できるゲームプレイ構造だけを辞書へ追加します。

## Thaleia との接続契約

Thaleia は `LUDUS_PLAY_GRAPH_PATH` で上記 Property Graph JSON を読み、グラフの `path` を
`ludus-play/` からの相対パスとして解決して各 OKF Markdown の説明・目的・設計思想・主要機能を
仕様書チューニングの根拠にします。

- `nodes[].id/type/title/path` と `edges[].type/from/to` は機械可読契約です。
- `HAS_SYSTEM.order` は非負整数または `null`（順序未指定）です。
- node ID は安定参照 ID です。改名時も既存 ID を不用意に変更しません。
- `path` は `ludus-play/` 内の相対パスに限定し、外部ファイルを参照しません。
- JSON は接続トポロジー、Markdown は意味内容の正本です。利用側は両方を読みます。

Thaleia は辞書を製品要件として自動採用せず、選択したジャンル／事例／システムについて
仕様のカバレッジ、UX成果、ドメイン要素、実装順序を根拠 ID 付きで提示します。

## 解析結果のフィードバックとデータ境界

Ludus の OKF bundle は、公開可能な汎用辞書の正本です。利用側のリポジトリへ辞書全体を複製せず、利用側では参照した Ludus のコミットまたはバージョン、選択した安定 ID、適用理由、ローカルな上書き、解析結果と採否だけを保持します。

解析結果は自動で Ludus へ書き戻しません。固有名、未公開の成果物、実装詳細、テレメトリ、生の解析データは利用側に留め、Ludus の生成元や補足データへ混入させません。公開情報から再現できる知識、または公開許可を得て十分に汎化した知識だけを、出典と判断根拠を添えた Pull Request として提案します。

Pull Request では、人による公開可否の確認に加えて、固有識別子、ローカルパス、非公開 URL、リポジトリ名、固有用語の残存を確認します。マージ後、利用側は新しい辞書バージョンと安定 ID を明示的に取り込みます。辞書と利用側の間に、自動同期や暗黙の双方向フィードバックは設けません。

## 責務境界

Pictorに集約するのは描画・UI・テキスト・アニメーション・画面効果などの**視覚表現**です。入力判定、ゲーム状態、勝敗、経済、時間制御そのものはErgo/Arsまたは各ゲームが所有します。この境界を各システムの `implementation_status` とPictor候補で記録します。
