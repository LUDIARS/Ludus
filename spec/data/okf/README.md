# Ludus の OKF データ

このディレクトリは、Ludusの「あそびの辞書」を [Open Knowledge Format (OKF)](https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing) で保存する場所です。

OKFでは、各Markdownファイルを一つの概念とし、YAML frontmatterに検索・投入に必要な属性を持たせます。通常のMarkdownリンクが概念間の関係を表すため、人間・AI・グラフDB投入器が同じソースを読めます。

## `ludus-play/`

Notionの「ゲーム構造一覧 (テンプレート一覧)」を取り込んだ遊びの辞書です。各ジャンルの主要システムに対して、次を明示します。

- 目標とするUX成果
- 取り扱うドメイン要素
- 汎用実装の判断
- Pictorに切り出せる視覚表現の候補
- 実装順序の前提

原典のJSONグラフがローカルにある場合は、次のコマンドで再生成できます。

```powershell
node tools/import-game-knowledge-graph.mjs --source E:\Document\Ars\game-knowledge-graph --timestamp 2026-07-15T00:00:00+09:00
```

生成される `ludus-play/exports/property-graph.json` は、OKFリンクを明示的なノード・エッジへ投影したグラフDB投入用データです。接続先のGraphDB製品はまだ決めないため、この段階では製品非依存のProperty Graph JSONを正本とします。

## 責務境界

Pictorに集約するのは描画・UI・テキスト・アニメーション・画面効果などの**視覚表現**です。入力判定、ゲーム状態、勝敗、経済、時間制御そのものはErgo/Arsまたは各ゲームが所有します。この境界を各システムの `implementation_status` とPictor候補で記録します。
