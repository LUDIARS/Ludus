---
type: "Ludus Gameplay System"
title: "構成とシナジー"
description: "役割の補完、能力コンボ、カウンター選択を成立させる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "hero-shooter"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:hero-shooter:composition-synergy"
genre_id: "genre:hero-shooter"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

役割の補完、能力コンボ、カウンター選択を成立させる。

# 設計思想

単一の必須構成へ固定しない。

# 主要機能

- 役割充足
- 連携効果
- 交代判断

# UXへの寄与

- [連携](../../ux/e73b7be6f0d5c286.md)
- [戦略性](../../ux/8ded4fcfb58a7e88.md)

# ドメイン要素

- [情報とUI](../../domains/information-and-ui.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)

# 実装上の前提

- [固有アビリティキット](./ability-kit.md) の後に実装する。
