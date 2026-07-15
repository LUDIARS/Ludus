---
type: "Ludus Gameplay System"
title: "敵/脅威システム"
description: "環境に危険を配置し、戦闘と回避の緊張感を提供する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "survival"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:survival:enemy"
genre_id: "genre:survival"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

環境に危険を配置し、戦闘と回避の緊張感を提供する。

# 設計思想

『環境の敵対化』。すべて敵対的だと疲れ、平和すぎると退屈。地域ごとの危険度 (安全な森→危険な山) でプレイヤーの進行を自然に誘導する。

# 主要機能

- 野生動物 (狼/熊などの敵対生物)
- 敵対NPC (略奪者/敵対勢力)
- 環境ハザード (毒霧/放射能/溶岩)
- AI行動 (徘徊/追跡/群れ行動)
- 音による検知 (足音で敵を引き寄せる)
- 難易度変化 (時間経過/地域で強敵出現)

# UXへの寄与

- [戦闘か回避か](../../ux/f9883db6c8ea7063.md)
- [緊張感](../../ux/d3504ee04079ad32.md)
- [武器の価値](../../ux/0257c54cce73180c.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [入力と操作](../../domains/input-and-control.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [コンテンツとペーシング](../../domains/content-and-pacing.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [昼夜サイクル/天候システム](./day-night.md) の後に実装する。
