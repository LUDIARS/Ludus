---
type: "Ludus Gameplay System"
title: "スタミナ/リソース管理"
description: "行動に制約を設けることで、無限の攻撃や回避を防ぎ、戦術的な選択を強制する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "action"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:action:stamina"
genre_id: "genre:action"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

行動に制約を設けることで、無限の攻撃や回避を防ぎ、戦術的な選択を強制する。

# 設計思想

『行動の経済学』を導入する。限られたリソースをどう使うか常に考え、攻撃と防御のバランスを取らせる。回復速度と消費量の調整でテンポと難易度を制御する。

# 主要機能

- スタミナゲージ (行動で消費・時間経過で回復)
- 消費量の可変化 (アクション強度に応じる)
- 枯渇ペナルティ (スタミナ切れ時の硬直/行動制限)
- 回復速度調整 (戦闘中/非戦闘中で変更)

# UXへの寄与

- [選択の重み](../../ux/afd5d3c7460e8707.md)
- [緊張感の維持](../../ux/7b1edf87f62a7975.md)
- [上達の余地](../../ux/dcf465b04162752b.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [リソースと経済](../../domains/resources-and-economy.md)
- [コンテンツとペーシング](../../domains/content-and-pacing.md)
- [情報とUI](../../domains/information-and-ui.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [UI描画](../../pictor/ui-rendering.md)

# 実装上の前提

- [ロックオンシステム](./lock-on.md) の後に実装する。
